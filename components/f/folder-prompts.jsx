import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6cjc0bct.css';
import '../../css/y/yeqdc6tqx.css';
import '../../css/d/dnf85abbq.css';
import '../../css/s/s2yhhvl5i.css';
import '../../css/z/zssb-ccbx.css';
import '../../css/a/atc-0dbwj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6cjc0bct"/><g class="yeqdc6tqx"><path class="dnf85abbq"/><rect class="s2yhhvl5i"/><rect class="zssb-ccbx"/><path class="atc-0dbwj"/></g>`,
		"fallback": "material-icon-theme:folder-prompts",
	});
}

export default Component;
