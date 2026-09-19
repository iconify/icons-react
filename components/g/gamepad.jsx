import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfcj5mbkc.css';
import '../../css/g/gjz44fbzs.css';
import '../../css/u/ufhycxbld.css';
import '../../css/t/tcaj15bgx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5jXj6dJe"><g class="ft5dv1b6b"><rect class="cfcj5mbkc"/><circle class="gjz44fbzs"/><circle class="ufhycxbld"/><path class="tcaj15bgx"/></g></mask></defs><path mask="url(#SVG5jXj6dJe)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:gamepad",
	});
}

export default Component;
