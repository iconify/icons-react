import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lord7rwpc.css';
import '../../css/s/srp1dmbec.css';
import '../../css/n/nuv2zkaui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lord7rwpc"/><path class="srp1dmbec"/><path class="nuv2zkaui"/>`,
		"fallback": "energy-icons:blade-recycling-20",
	});
}

export default Component;
