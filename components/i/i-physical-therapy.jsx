import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c_j3ow9vl.css';
import '../../css/o/o0ujm8bpz.css';
import '../../css/s/s3nxbqbxz.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c_j3ow9vl"/><path class="o0ujm8bpz"/><path class="s3nxbqbxz"/>`,
		"fallback": "medical-icon:i-physical-therapy",
	});
}

export default Component;
