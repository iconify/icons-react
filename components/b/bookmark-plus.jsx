import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x15zte28m.css';
import '../../css/t/te7ulccft.css';
import '../../css/i/i_7phq4mg.css';
import '../../css/n/n8w75gbzh.css';
import '../../css/i/ige9nwfhs.css';
import '../../css/f/f4uwtdbaj.css';
import '../../css/l/lv-f21bzq.css';
import '../../css/l/lkzyprb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow x15zte28m"/><path class="te7ulccft wm-k"/><path class="i_7phq4mg wm-k"/><path class="n8w75gbzh wm-k"/><path class="ige9nwfhs wm-k"/><path class="f4uwtdbaj wm-k"/><path class="lv-f21bzq wm-shine"/><path class="lkzyprb6r wm-a"/>`,
		"fallback": "withicons-pastel:bookmark-plus",
	});
}

export default Component;
