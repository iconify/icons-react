import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzsb0npgv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzsb0npgv"/>`,
		"fallback": "cib:google-podcasts",
	});
}

export default Component;
