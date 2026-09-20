import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3309_2rv.css';
import '../../css/n/n60jv4b6k.css';
import '../../css/h/hhc0tgbyt.css';
import '../../css/d/dwfzbqb4m.css';
import '../../css/o/o97ku8yzj.css';
import '../../css/i/i7r0h4bga.css';

const viewBox = {"width":323,"height":323};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3309_2rv"/><path class="n60jv4b6k"/><path class="hhc0tgbyt"/><path class="dwfzbqb4m"/><path class="o97ku8yzj"/><path class="i7r0h4bga"/>`,
		"fallback": "material-icon-theme:elm",
	});
}

export default Component;
