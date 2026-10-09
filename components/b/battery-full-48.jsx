import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s84xoibnh.css';
import '../../css/d/dbhsu82qc.css';
import '../../css/i/i0dgocbbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s84xoibnh"/><path class="dbhsu82qc"/><path class="i0dgocbbs"/>`,
		"fallback": "energy-icons:battery-full-48",
	});
}

export default Component;
