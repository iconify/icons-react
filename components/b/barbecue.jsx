import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/o/oq8c0-foz.css';
import '../../css/z/zy5gnlrgp.css';
import '../../css/y/y_gwdpbzr.css';
import '../../css/u/u4kn_zscc.css';
import '../../css/o/ou0wldbyr.css';
import '../../css/j/jq-1spbwd.css';
import '../../css/z/zcnoikvbi.css';
import '../../css/h/hrsylwbrt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXIDiKbln"><g class="hv130ab-t"><rect class="oq8c0-foz"/><rect class="zy5gnlrgp"/><path class="y_gwdpbzr"/><rect class="u4kn_zscc"/><rect class="ou0wldbyr"/><path class="jq-1spbwd"/><path class="zcnoikvbi"/><path class="hrsylwbrt"/></g></mask></defs><path mask="url(#SVGXIDiKbln)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:barbecue",
	});
}

export default Component;
