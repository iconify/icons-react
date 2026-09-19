import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyvrhuu2d.css';
import '../../css/u/uz5eyob-g.css';
import '../../css/n/n6npgcbbo.css';
import '../../css/y/ymugftbql.css';
import '../../css/x/x3zud0byo.css';
import '../../css/x/xqj0kzcvg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yyvrhuu2d"/><path class="uz5eyob-g"/><circle class="n6npgcbbo"/><path class="ymugftbql"/><circle class="x3zud0byo"/><path class="xqj0kzcvg"/>`,
		"fallback": "carbon:ibm-event-automation",
	});
}

export default Component;
