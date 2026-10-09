import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smfo77bmv.css';
import '../../css/b/b48504bnz.css';
import '../../css/z/z2biak6at.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smfo77bmv"/><path class="b48504bnz"/><path class="z2biak6at"/>`,
		"fallback": "energy-icons:dryer-48",
	});
}

export default Component;
