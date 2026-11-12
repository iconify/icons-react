import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rok_s9ahy.css';
import '../../css/z/znuoivmti.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rok_s9ahy"/><path class="znuoivmti"/>`,
		"fallback": "selfhst:espconnect-light",
	});
}

export default Component;
