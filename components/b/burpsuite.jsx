import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g37freb4x.css';
import '../../css/c/ck8n3ib1j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g37freb4x"/><path class="ck8n3ib1j"/>`,
		"fallback": "devicon:burpsuite",
	});
}

export default Component;
