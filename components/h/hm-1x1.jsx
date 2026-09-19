import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rglylsb5w.css';
import '../../css/r/rjpniljif.css';
import '../../css/t/tw3s6obnb.css';
import '../../css/v/v3canabei.css';
import '../../css/j/j71tgsbte.css';
import '../../css/h/hs0og3bqf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rglylsb5w"/><path class="rjpniljif"/><path class="tw3s6obnb"/><path class="v3canabei"/><path class="j71tgsbte"/><path class="hs0og3bqf"/>`,
		"fallback": "flag:hm-1x1",
	});
}

export default Component;
