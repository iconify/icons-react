import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bej3u-s3a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bej3u-s3a"/>`,
		"fallback": "streamline:ai-generate-portrait-image-spark-remix",
	});
}

export default Component;
