import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/o/ozj6j1biz.css';
import '../../css/p/p7nzrhhjr.css';
import '../../css/k/kjzog8teo.css';
import '../../css/k/kjdsa22ry.css';
import '../../css/k/k7m6syo0g.css';
import '../../css/c/c48gtob-y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG56KgvbzM"><g class="hv130ab-t"><path class="ozj6j1biz"/><path class="p7nzrhhjr"/><path class="kjzog8teo"/><path class="kjdsa22ry"/><path class="k7m6syo0g"/><path class="c48gtob-y"/></g></mask></defs><path mask="url(#SVG56KgvbzM)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:in-flight",
	});
}

export default Component;
