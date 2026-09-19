import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/w006b1bic.css';
import '../../css/u/u-r8ydben.css';
import '../../css/o/o-4xw7lai.css';
import '../../css/v/vtw6jyqmn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="w006b1bic"/><path class="u-r8ydben"/><path class="o-4xw7lai"/><path class="vtw6jyqmn"/></g>`,
		"fallback": "icon-park:install",
	});
}

export default Component;
