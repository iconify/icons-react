import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ht4pbgq.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/z/zoar6acpn.css';
import '../../css/l/lrhlp9bgs.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ht4pbgq"/><path class="jqc7hmb-f"/><path class="zoar6acpn"/><path class="lrhlp9bgs"/>`,
		"fallback": "gis:gpx-file",
	});
}

export default Component;
