import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eow2v3j8v.css';
import '../../css/l/lylvmeb0j.css';
import '../../css/c/cgm5haclf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eow2v3j8v"/><path class="lylvmeb0j"/><path class="cgm5haclf"/>`,
		"fallback": "selfhst:chorizard-light",
	});
}

export default Component;
