import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdn-nablh.css';
import '../../css/c/c96m-ibzj.css';
import '../../css/n/n73z5e0fx.css';
import '../../css/r/r7_w2kbdh.css';
import '../../css/w/w9av6_n9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdn-nablh"/><path class="c96m-ibzj"/><rect class="n73z5e0fx"/><rect class="r7_w2kbdh"/><path class="w9av6_n9u"/>`,
		"fallback": "material-icon-theme:folder-prompts-open",
	});
}

export default Component;
