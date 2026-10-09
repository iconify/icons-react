import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnz38bbup.css';
import '../../css/x/x-e0pwbux.css';
import '../../css/m/msg7k8bbh.css';
import '../../css/w/wyuzfgbum.css';
import '../../css/o/oemkp8bpy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnz38bbup"/><path class="x-e0pwbux"/><path class="msg7k8bbh"/><path class="wyuzfgbum"/><path class="oemkp8bpy"/>`,
		"fallback": "energy-icons:chart-radar-48-bold",
	});
}

export default Component;
