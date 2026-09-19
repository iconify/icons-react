import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nd6dw_b3z.css';
import '../../css/b/bcquo5bbo.css';
import '../../css/n/n0g76ebbp.css';
import '../../css/p/pn1ua5xcj.css';
import '../../css/e/ek7kn1hqh.css';
import '../../css/j/jb_0arasq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="nd6dw_b3z"/><circle class="bcquo5bbo"/><circle class="n0g76ebbp"/><circle class="pn1ua5xcj"/><circle class="ek7kn1hqh"/><circle class="jb_0arasq"/></g>`,
		"fallback": "charm:grab-vertical",
	});
}

export default Component;
