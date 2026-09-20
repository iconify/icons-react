import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3nu1cc-n.css';
import '../../css/m/m7_384bcw.css';

const viewBox = {"width":960,"height":960,"top":-960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3nu1cc-n"/><path class="m7_384bcw"/>`,
		"fallback": "material-icon-theme:actionscript",
	});
}

export default Component;
