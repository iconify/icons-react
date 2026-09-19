import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/svg23iagb.css';
import '../../css/v/vupjyybzv.css';
import '../../css/r/r8mcvnbot.css';
import '../../css/v/vsob5ac3n.css';
import '../../css/g/gbtnm02ok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="svg23iagb"/><path class="vupjyybzv"/><path class="r8mcvnbot"/><path class="vsob5ac3n"/><path class="gbtnm02ok"/></g>`,
		"fallback": "icon-park:diamonds",
	});
}

export default Component;
