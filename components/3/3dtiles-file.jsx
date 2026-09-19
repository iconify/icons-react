import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huet2vb5i.css';
import '../../css/j/jqc7hmb-f.css';
import '../../css/y/y1g_73byz.css';
import '../../css/s/sdd9u_bsu.css';
import '../../css/l/l9c08fbua.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huet2vb5i"/><path class="jqc7hmb-f"/><path class="y1g_73byz"/><path class="sdd9u_bsu"/><path class="l9c08fbua"/>`,
		"fallback": "gis:3dtiles-file",
	});
}

export default Component;
