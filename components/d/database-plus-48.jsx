import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuoptpb4g.css';
import '../../css/y/ydn39sbil.css';
import '../../css/p/p3yi1mbbm.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuoptpb4g"/><path class="ydn39sbil"/><path class="p3yi1mbbm"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:database-plus-48",
	});
}

export default Component;
