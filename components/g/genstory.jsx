import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcmoe4kyy.css';
import '../../css/l/ld8_l_m_x.css';
import '../../css/p/pyo091bsc.css';
import '../../css/c/c8afke3ti.css';

const viewBox = {"width":440,"height":438};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVG9JK7sSPy" x1="86" x2="289" y1="36" y2="420" gradientUnits="userSpaceOnUse"><stop offset="0" class="vcmoe4kyy"/><stop offset=".52" class="ld8_l_m_x"/><stop offset="1" class="pyo091bsc"/></linearGradient></defs><path stroke="url(#SVG9JK7sSPy)" class="c8afke3ti"/>`,
		"fallback": "thesvg-color:genstory",
	});
}

export default Component;
