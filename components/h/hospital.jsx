import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/mfugwt4zs.css';
import '../../css/g/g0lxagb7y.css';
import '../../css/q/qt0k9pbqg.css';
import '../../css/t/tjeo8fbwf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="mfugwt4zs"/><path class="g0lxagb7y"/><path class="qt0k9pbqg"/><path class="tjeo8fbwf"/></g>`,
		"fallback": "icon-park:hospital",
	});
}

export default Component;
