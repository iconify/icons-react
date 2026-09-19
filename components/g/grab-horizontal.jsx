import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dgrw-kg1f.css';
import '../../css/n/n8-s9xncy.css';
import '../../css/z/zbclgg51g.css';
import '../../css/q/qay7yab0m.css';
import '../../css/h/hypwe_bgq.css';
import '../../css/p/phwfinowp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="dgrw-kg1f"/><circle class="n8-s9xncy"/><circle class="zbclgg51g"/><circle class="qay7yab0m"/><circle class="hypwe_bgq"/><circle class="phwfinowp"/></g>`,
		"fallback": "charm:grab-horizontal",
	});
}

export default Component;
