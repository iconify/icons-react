import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/toioolyse.css';
import '../../css/r/rmpt2909q.css';
import '../../css/m/m590xwjxi.css';
import '../../css/q/qpny3e4gk.css';
import '../../css/r/r4z8jdb-d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG7il2Abln"><g class="ft5dv1b6b"><rect class="toioolyse"/><path class="rmpt2909q"/><circle class="m590xwjxi"/><circle class="qpny3e4gk"/><path class="r4z8jdb-d"/></g></mask></defs><path mask="url(#SVG7il2Abln)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:bus-one",
	});
}

export default Component;
