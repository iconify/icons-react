import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b51-lhp3z.css';
import '../../css/e/emr27z70l.css';
import '../../css/u/uca2xacku.css';
import '../../css/y/yibik2aeh.css';
import '../../css/l/ly-2avlcf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="b51-lhp3z"/><path class="emr27z70l"/><path class="uca2xacku"/><path class="yibik2aeh"/><path class="ly-2avlcf"/></g>`,
		"fallback": "icon-park:f-nine-key",
	});
}

export default Component;
