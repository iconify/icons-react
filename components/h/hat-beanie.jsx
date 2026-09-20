import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ae582acpv.css';
import '../../css/x/xe53owbmy.css';
import '../../css/k/kf9bnsb8d.css';
import '../../css/z/zgbwwhbkk.css';
import '../../css/e/e8uvoxbln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ae582acpv"/><circle class="xe53owbmy"/><path class="kf9bnsb8d"/><rect class="zgbwwhbkk"/><path class="e8uvoxbln"/></g>`,
		"fallback": "lucide-lab:hat-beanie",
	});
}

export default Component;
