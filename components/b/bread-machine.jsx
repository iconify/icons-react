import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/z/zee_y4bal.css';
import '../../css/f/facvjl48f.css';
import '../../css/a/a9fdlxznv.css';
import '../../css/u/ukpzrubfw.css';
import '../../css/j/jnu_12b7w.css';
import '../../css/o/okdzj0bue.css';
import '../../css/t/t1dd18bzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="zee_y4bal"/><path class="facvjl48f"/><path class="a9fdlxznv"/><path class="ukpzrubfw"/><circle class="jnu_12b7w"/><path class="okdzj0bue"/><path class="t1dd18bzi"/></g>`,
		"fallback": "icon-park:bread-machine",
	});
}

export default Component;
