import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlu19nbng.css';
import '../../css/h/hs0kickzo.css';
import '../../css/o/o-6k8fv8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlu19nbng"/><path class="hs0kickzo"/><path class="o-6k8fv8n"/>`,
		"fallback": "streamline-ultimate:gesture-double-tap-bold",
	});
}

export default Component;
