import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npw5xy.css';
import '../../css/s/s1ui7u.css';
import '../../css/t/taf2xz.css';
import '../../css/x/xww8sl.css';
import '../../css/y/y4wbml.css';
import '../../css/e/eq1s0x.css';
import '../../css/u/uew7ro.css';
import '../../css/j/jgfkix.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-46.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npw5xy s1ui7u taf2xz"/><path class="s1ui7u taf2xz xww8sl y4wbml"/><path class="eq1s0x s1ui7u y4wbml"/><path class="s1ui7u uew7ro y4wbml"/><path class="jgfkix s1ui7u y4wbml"/>`,
		"fallback": "line-md:construction-twotone",
	});
}

export default Component;
