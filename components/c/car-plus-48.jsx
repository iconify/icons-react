import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfdfq4bue.css';
import '../../css/f/ftsh3hbxo.css';
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
		"content": `<path class="cfdfq4bue"/><path class="ftsh3hbxo"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:car-plus-48",
	});
}

export default Component;
