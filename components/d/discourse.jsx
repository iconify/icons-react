import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efikpikom.css';
import '../../css/v/vsc753i0a.css';
import '../../css/b/bgs0obc3p.css';
import '../../css/i/izmb9h44l.css';
import '../../css/r/rub2ksxch.css';
import '../../css/m/mo88tmbuv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efikpikom"/><path class="vsc753i0a"/><path class="bgs0obc3p"/><path class="izmb9h44l"/><path class="rub2ksxch"/><path class="mo88tmbuv"/>`,
		"fallback": "selfhst:discourse",
	});
}

export default Component;
