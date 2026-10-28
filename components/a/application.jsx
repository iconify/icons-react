import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/g/g-o6a2-ay.css';
import '../../css/l/lor0dobsk.css';
import '../../css/u/u91wj2bhd.css';
import '../../css/y/ywomxlbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><rect class="g-o6a2-ay"/><rect class="lor0dobsk"/><rect class="u91wj2bhd"/><circle class="ywomxlbes"/></g>`,
		"fallback": "codex:application",
	});
}

export default Component;
