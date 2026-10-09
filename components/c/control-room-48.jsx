import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za30h5bbb.css';
import '../../css/l/la7u05btg.css';
import '../../css/t/trua1bnbj.css';
import '../../css/n/no056qffi.css';
import '../../css/u/uksulubnp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za30h5bbb"/><path class="la7u05btg"/><path class="trua1bnbj"/><path class="no056qffi"/><path class="uksulubnp"/>`,
		"fallback": "energy-icons:control-room-48",
	});
}

export default Component;
