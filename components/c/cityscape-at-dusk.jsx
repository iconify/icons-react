import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7eit2b6n.css';
import '../../css/d/duj9bc8df.css';
import '../../css/w/wz55vgarx.css';
import '../../css/n/n2lcrpbli.css';
import '../../css/i/i3cr3vbqz.css';
import '../../css/r/r2-si39jq.css';
import '../../css/y/ywys9cb6x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v7eit2b6n"/><path class="duj9bc8df"/><path class="wz55vgarx"/><path class="n2lcrpbli"/><path class="i3cr3vbqz"/><path class="r2-si39jq"/><path class="ywys9cb6x"/></g>`,
		"fallback": "fluent-emoji-flat:cityscape-at-dusk",
	});
}

export default Component;
