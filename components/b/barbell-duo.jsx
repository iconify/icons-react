import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f54qbyb0o.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ie4ua51pd.css';
import '../../css/b/bo45-obwu.css';
import '../../css/m/m114rjv8a.css';
import '../../css/g/gwy80eb0w.css';
import '../../css/q/q60ma8sjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f54qbyb0o secondary"/><g class="dt0cm9dhy primary"><path class="ie4ua51pd"/><path class="bo45-obwu"/><path class="m114rjv8a"/><path class="gwy80eb0w"/><path class="q60ma8sjd"/></g>`,
		"fallback": "iconaut:barbell-duo",
	});
}

export default Component;
