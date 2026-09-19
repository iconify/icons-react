import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgf3yzrlx.css';
import '../../css/z/z3y8skb9i.css';
import '../../css/x/xr3fg5b6q.css';
import '../../css/f/f8mswb0ag.css';
import '../../css/s/s_ge-rmln.css';
import '../../css/v/vf2glrf0q.css';
import '../../css/m/m7pbr04el.css';
import '../../css/m/mstelepqt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGueySdUZu"><g class="ft5dv1b6b"><circle class="rgf3yzrlx"/><path class="z3y8skb9i"/><path class="xr3fg5b6q"/><circle class="f8mswb0ag"/><circle class="s_ge-rmln"/><circle class="vf2glrf0q"/><circle class="m7pbr04el"/><circle class="mstelepqt"/></g></mask></defs><path mask="url(#SVGueySdUZu)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:hdmi-connector",
	});
}

export default Component;
