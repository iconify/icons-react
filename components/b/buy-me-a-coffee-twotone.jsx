import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/w/ww4euh.css';
import '../../css/d/dgjdcp.css';
import '../../css/n/nf43cj.css';
import '../../css/b/b15c7b.css';
import '../../css/n/ntfd5n.css';
import '../../css/a/a0m25c.css';
import '../../css/u/uu-53j.css';
import '../../css/z/zl4c-b.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-4-9ugh.css';
import '../../css/d/d-n8ltvl.css';
import '../../css/d/d-mjtjes.css';
import '../../css/d/d-q_3c1b.css';
import '../../css/s/so-from-32.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRmlaebPq"><path class="g26hbu ww4euh"/><path class="dgjdcp nf43cj"/></mask><mask id="SVGPhDhmeRR"><path class="b15c7b g26hbu"/><path class="nf43cj ntfd5n"/></mask></defs><path class="a0m25c uu-53j"/><path class="a0m25c zl4c-b"/><path mask="url(#SVGRmlaebPq)" class="botfzx"/><path mask="url(#SVGPhDhmeRR)" class="botfzx"/>`,
		"fallback": "line-md:buy-me-a-coffee-twotone",
	});
}

export default Component;
