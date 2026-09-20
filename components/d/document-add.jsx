import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/v/vlmmxw.css';
import '../../css/a/ab0nvj.css';
import '../../css/f/fri20d.css';
import '../../css/z/zdnecf.css';
import '../../css/s/so-from-64.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa-o7h taf2xz vlmmxw"/><path class="ab0nvj qa-o7h"/><path class="fri20d qa-o7h taf2xz"/><path class="qa-o7h taf2xz zdnecf"/>`,
		"fallback": "line-md:document-add",
	});
}

export default Component;
