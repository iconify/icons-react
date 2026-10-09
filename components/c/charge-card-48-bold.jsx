import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmptwf-ti.css';
import '../../css/e/eq_morblf.css';
import '../../css/q/qntnywbvk.css';
import '../../css/w/wa3ofwbel.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmptwf-ti"/><path class="eq_morblf"/><path class="qntnywbvk"/><path class="wa3ofwbel"/>`,
		"fallback": "energy-icons:charge-card-48-bold",
	});
}

export default Component;
