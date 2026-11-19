import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ltxanqbqt.css';
import '../../css/w/wx0slfe_h.css';
import '../../css/o/ocdjfmb6u.css';
import '../../css/n/n4b98qw6q.css';
import '../../css/i/i99ub2snp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ltxanqbqt"/><path class="wx0slfe_h"/><path class="ocdjfmb6u"/><path class="n4b98qw6q"/><path class="i99ub2snp"/></g>`,
		"fallback": "andrsrxn:broom-sparkles",
	});
}

export default Component;
