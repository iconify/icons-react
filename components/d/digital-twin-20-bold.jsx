import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr6w732hx.css';
import '../../css/a/aslqxg6fb.css';
import '../../css/f/fw_p-ryho.css';
import '../../css/c/cooiocbhc.css';
import '../../css/m/m_m_e8loz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr6w732hx"/><path class="aslqxg6fb"/><path class="fw_p-ryho"/><path class="cooiocbhc"/><path class="m_m_e8loz"/>`,
		"fallback": "energy-icons:digital-twin-20-bold",
	});
}

export default Component;
