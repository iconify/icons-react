import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqfy24bla.css';
import '../../css/i/ijmbz5bch.css';
import '../../css/u/u1ktodbsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqfy24bla"/><path class="ijmbz5bch"/><path class="u1ktodbsw"/>`,
		"fallback": "ion:drag",
	});
}

export default Component;
