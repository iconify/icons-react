import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/v/vtj-1x.css';
import '../../css/i/igwevy.css';
import '../../css/y/ydovum.css';
import '../../css/d/dedmdx.css';
import '../../css/o/osncet.css';
import '../../css/l/lvp4rc.css';
import '../../css/n/n-cg9g.css';
import '../../css/n/n1fldj.css';
import '../../css/v/vf2iyr.css';
import '../../css/z/zdtz3h.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c vtj-1x"/><circle class="igwevy ydovum"/><circle class="dedmdx ydovum"/><circle class="osncet ydovum"/><circle class="lvp4rc ydovum"/><circle class="n-cg9g ydovum"/><path class="a0m25c n1fldj"/><path class="a0m25c vf2iyr"/><path class="a0m25c zdtz3h"/>`,
		"fallback": "line-md:cookie-settings",
	});
}

export default Component;
