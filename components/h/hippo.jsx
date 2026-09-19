import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hi8gbacim.css';
import '../../css/f/fx7uw8bax.css';
import '../../css/i/iehfvgbui.css';
import '../../css/g/gix5dqb2u.css';
import '../../css/s/s_li2rbdk.css';
import '../../css/e/ekadmhbkq.css';
import '../../css/d/dhqxexbtw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="hi8gbacim"/><circle class="fx7uw8bax"/><circle class="iehfvgbui"/><path class="gix5dqb2u"/><circle class="s_li2rbdk"/><circle class="ekadmhbkq"/><path class="dhqxexbtw"/></g>`,
		"fallback": "icon-park-outline:hippo",
	});
}

export default Component;
