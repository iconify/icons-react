import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/yq0agmbxn.css';
import '../../css/q/qmr6impwm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGE9tJNcsq"><g class="s9cl3zbei"><path class="yq0agmbxn"/><path class="qmr6impwm"/></g></mask></defs><path mask="url(#SVGE9tJNcsq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:avocado",
	});
}

export default Component;
