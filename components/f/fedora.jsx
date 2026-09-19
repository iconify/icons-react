import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxnha9ckb.css';
import '../../css/p/pf8zfzboe.css';
import '../../css/y/yqb3fgb8u.css';
import '../../css/k/k5ytk7b-i.css';
import '../../css/f/fi6ai_avh.css';
import '../../css/d/dsly88bou.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxnha9ckb"/><path class="pf8zfzboe"/><path class="yqb3fgb8u"/><path class="k5ytk7b-i"/><path class="fi6ai_avh"/><path class="dsly88bou"/>`,
		"fallback": "devicon:fedora",
	});
}

export default Component;
