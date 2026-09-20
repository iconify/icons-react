import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnkhkh.css';
import '../../css/q/qa-o7h.css';
import '../../css/t/taf2xz.css';
import '../../css/v/vlmmxw.css';
import '../../css/a/ab0nvj.css';
import '../../css/j/j8e1tp.css';
import '../../css/w/w2ru-a.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
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
		"content": `<path class="lnkhkh"/><path class="qa-o7h taf2xz vlmmxw"/><path class="ab0nvj qa-o7h"/><path class="j8e1tp qa-o7h taf2xz"/><path class="qa-o7h taf2xz w2ru-a"/>`,
		"fallback": "line-md:document-delete-twotone",
	});
}

export default Component;
